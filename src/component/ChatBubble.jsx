import React, { useState, useEffect } from 'react';
import { IoIosSend } from "react-icons/io";
import { createClient } from '@supabase/supabase-js';

// Konfigurasi Supabase - ganti dengan URL dan Key Anda
const SUPABASE_URL = "https://mnnazowvbbpsebhtjdjn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ubmF6b3d2YmJwc2ViaHRqZGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0OTUwMTIsImV4cCI6MjA3MDA3MTAxMn0.0Esp0CrIHf6AA2hDzKVhDml_2561nNWyT1ARVSQ1hqo";

// Membuat client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const ChatBubble = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [profilePhotoFile, setProfilePhotoFile] = useState(null);
    const [comments, setComments] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showRedirectButton, setShowRedirectButton] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const isFormValid = name.trim() !== '' && message.trim() !== '';

    // Load comments dari Supabase
    const loadComments = async () => {
        setIsLoading(true);
        try {
            console.log('🔄 Loading comments from Supabase...');
            console.log('🔧 Supabase URL:', SUPABASE_URL);
            console.log('🔧 Using table: comments');
            
            const { data, error } = await supabase
                .from('comments')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('❌ Supabase Error Details:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code
                });
                
                // Coba query sederhana tanpa order
                console.log('🔄 Trying simple query without order...');
                const { data: simpleData, error: simpleError } = await supabase
                    .from('comments')
                    .select('*');
                    
                if (simpleError) {
                    console.error('❌ Simple query also failed:', simpleError);
                } else {
                    console.log('✅ Simple query success:', simpleData);
                    setComments(simpleData || []);
                }
                return;
            }

            console.log('✅ Comments loaded successfully:', data);
            console.log('📊 Total comments:', data?.length || 0);
            
            setComments(data || []);
        } catch (error) {
            console.error('❌ Catch Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Load data saat komponen dimount
    useEffect(() => {
        loadComments();
    }, []);

    // Handle file upload untuk foto profil
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Simpan file untuk upload nanti
            setProfilePhotoFile(file);
            
            // Buat preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Upload foto ke Supabase Storage
    const uploadPhoto = async (file) => {
        if (!file) return null;

        try {
            const fileName = `${Date.now()}_${file.name}`;
            const { data, error } = await supabase.storage
                .from('avatars')
                .upload(fileName, file);

            if (error) {
                console.error('Error uploading photo:', error);
                return null;
            }

            // Return public URL
            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(fileName);

            return publicUrl;
        } catch (error) {
            console.error('Error uploading photo:', error);
            return null;
        }
    };

    // Fungsi kirim pesan ke Supabase
    const handleSubmit = async () => {
        if (!name.trim() || !message.trim()) return;

        setIsSubmitting(true);

        try {
            let avatar_url = null;

            // Upload foto jika ada
            if (profilePhotoFile) {
                avatar_url = await uploadPhoto(profilePhotoFile);
            }

            // Jika tidak ada foto yang diupload, gunakan UI Avatars sebagai fallback
            if (!avatar_url) {
                avatar_url = `https://ui-avatars.com/api/?name=${encodeURIComponent(name.trim())}&background=374151&color=fff`;
            }

            // Insert comment ke Supabase
            const { data, error } = await supabase
                .from('comments')
                .insert([
                    {
                        username: name.trim(),
                        message: message.trim(),
                        avatar_url: avatar_url
                    }
                ])
                .select();

            if (error) {
                console.error('Error submitting comment:', error);
                alert('Error submitting comment. Please try again.');
                return;
            }

            // Reset form
            setName('');
            setMessage('');
            setProfilePhoto('');
            setProfilePhotoFile(null);

            // Reset file input
            const fileInput = document.getElementById('photo-upload');
            if (fileInput) fileInput.value = '';

            // Reload comments untuk mendapatkan data terbaru
            await loadComments();

            setTimeout(() => {
                setShowRedirectButton(true);
            }, 1000);

        } catch (error) {
            console.error('Error submitting comment:', error);
            alert('Error submitting comment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle Enter key untuk submit
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleSubmit();
        }
    };

    // Format waktu dari timestamp Supabase
    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white">
            {/* Header */}
            <div className="bg-gray-800/10 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-6 py-4">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                        Join the Chat
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">Whether it's a question, feedback, or just a vibe check, i love to hear from you! If you're lucky, you might get a gift from me, hahaha</p>
                </div>
            </div>
            
            <div className="max-w-2xl mx-auto px-6 py-8">
                {/* Form */}
                <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-2xl mb-8 transform transition-all duration-300 hover:bg-gray-800/70">
                    <div className="space-y-4">
                        {/* Nama */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Your Name</label>
                            <input
                                type="text"
                                placeholder="Input your name/Anonymous"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={handleKeyPress}
                                className="w-full bg-gray-700/50 border border-gray-600 p-3 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200"
                                maxLength={50}
                                required
                            />
                        </div>

                        {/* Foto Profil */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300"></label>
                            <div className="flex items-center gap-4">
                                <input
                                    id="photo-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoUpload}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="photo-upload"
                                    className="bg-gray-700/50 border border-gray-600 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-600/50 transition-all duration-200 text-sm"
                                >
                                    Want to use a photo? Yes, you can.
                                </label>
                                {profilePhoto && (
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={profilePhoto}
                                            alt="Preview"
                                            className="w-8 h-8 rounded-full object-cover border border-gray-600"
                                        />
                                        <span className="text-sm text-green-400">Your Photo</span>
                                        <button
                                            onClick={() => {
                                                setProfilePhoto('');
                                                setProfilePhotoFile(null);
                                            }}
                                            className="text-red-400 hover:text-red-300 text-sm ml-2"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Pesan */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                placeholder="Input a message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyPress}
                                className="w-full bg-gray-700/50 border border-gray-600 p-3 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 resize-none"
                                rows="3"
                                maxLength={500}
                                required
                            />
                            <div className="text-right text-xs text-gray-500">
                                {message.length}/500 Char
                            </div>
                        </div>

                        {/* Button Kirim */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={!isFormValid || isSubmitting}
                            className={`w-full p-3 rounded-xl font-semibold transition-all duration-300 transform ${!isFormValid || isSubmitting
                                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg'
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Sending<IoIosSend />
                                </div>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                        {/* Hidden Button */}
                        {showRedirectButton && (
                            <a
                                href="/portov2/gifts/flower.html"
                                target='blank'
                                className="mt-4 block text-center bg-white text-black p-3 rounded-xl shadow-lg hover:bg-grey-200 transition-all"
                            >
                                there's a gift for you! thanks btw
                            </a>
                        )}

                        {/* Debug: Manual Reload Button */}
                      
                    </div>
                </div>
                {/* Loading State */}
                {isLoading ? (
                    <div className="text-center py-12">
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-400">Loading messages...</p>
                    </div>
                ) : (
                    /* Chat Bubbles */
                    <div className="space-y-4">
                        {comments.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">💭</div>
                                <p className="text-gray-400 text-lg">no message here!</p>
                                <p className="text-gray-500 text-sm mt-2">Let's send the message!</p>
                            </div>
                        ) : (
                            comments.map((comment, index) => (
                                <div
                                    key={comment.id}
                                    className="animate-slide-up bg-gray-800/40 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/30 shadow-xl transform transition-all duration-300 hover:bg-gray-800/60 hover:scale-[1.01]"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start gap-3">
                                        <img
                                            src={comment.avatar_url}
                                            alt={`${comment.username} avatar`}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-600 shadow-lg"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.username)}&background=374151&color=fff`;
                                            }}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <p className="font-semibold text-white">{comment.username}</p>
                                                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                                                    {formatTime(comment.inserted_at)}
                                                </span>
                                            </div>
                                            <p className="text-gray-200 leading-relaxed break-words whitespace-pre-wrap">
                                                {comment.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* Footer Info */}
                {comments.length > 0 && !isLoading && (
                    <div className="mt-8 flex items-center justify-between text-gray-500 text-sm">
                        <span className="flex items-center gap-2">
                            {comments.length} message{comments.length > 1 ? 's' : ''} saved
                        </span>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.6s ease-out both;
                }
            `}</style>
        </div>
    );
};

export default ChatBubble;