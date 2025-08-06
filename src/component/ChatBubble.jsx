import React, { useState, useEffect } from 'react';
import { IoIosSend } from "react-icons/io";

const ChatBubble = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [comments, setComments] = useState([]);
    const [showHiddenBtn, setShowHiddenBtn] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showRedirectButton, setShowRedirectButton] = useState(false);

    // Storage untuk menyimpan data secara persisten (gunakan localStorage di environment yang mendukung)

    const isFormValid = name.trim() !== '' && message.trim() !== '';
    const saveToStorage = (data) => {
        try {
            // Untuk environment yang mendukung localStorage
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('chatComments', JSON.stringify(data));
            }
            // Untuk environment Claude.ai, data tetap tersimpan selama sesi
        } catch (error) {
            console.error('Error saving to storage:', error);
        }
    };

    const saveHiddenBtnStatus = (status) => {
        try {
            if (typeof sessionStorage !== 'undefined') {
                sessionStorage.setItem('hiddenBtnShown', status);
            }
        } catch (error) {
            console.error('Error saving hidden button status:', error);
        }
    };

    const getHiddenBtnStatus = () => {
        try {
            if (typeof sessionStorage !== 'undefined') {
                return sessionStorage.getItem('hiddenBtnShown') === 'true';
            }
            return false;
        } catch (error) {
            console.error('Error getting hidden button status:', error);
            return false;
        }
    };

    const loadFromStorage = () => {
        try {
            // Untuk environment yang mendukung localStorage
            if (typeof localStorage !== 'undefined') {
                const savedComments = localStorage.getItem('chatComments');
                if (savedComments) {
                    return JSON.parse(savedComments);
                }
            }
            return [];
        } catch (error) {
            console.error('Error loading from storage:', error);
            return [];
        }
    };

    // Load data saat komponen dimount
    useEffect(() => {
        const savedComments = loadFromStorage();
        const hiddenBtnShown = getHiddenBtnStatus();

        if (savedComments.length > 0) {
            setComments(savedComments);
            // Hanya set showHiddenBtn jika belum pernah ditampilkan dalam sesi ini
            if (!hiddenBtnShown) {
                setShowHiddenBtn(true);
            }
        }
    }, []);

    // Simpan ke storage setiap kali comments berubah
    useEffect(() => {
        if (comments.length > 0) {
            saveToStorage(comments);
        }
    }, [comments]);

    // Handle file upload untuk foto profil
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Fungsi kirim pesan
    const handleSubmit = async () => {
        if (!name.trim() || !message.trim()) return;

        setIsSubmitting(true);

        // Simulasi delay untuk animasi
        await new Promise(resolve => setTimeout(resolve, 500));

        const newComment = {
            id: Date.now(),
            name: name.trim(),
            message: message.trim(),
            profilePhoto: profilePhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(name.trim())}&background=374151&color=fff`,
            time: new Date().toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit'
            }),
            timestamp: Date.now()
        };

        setComments(prev => [...prev, newComment]);
        setName('');
        setMessage('');
        setProfilePhoto('');

        setTimeout(() => {
            setIsSubmitting(false);
            setShowRedirectButton(true);
        }, 1000); // Simulasi delay

        // Reset file input
        const fileInput = document.getElementById('photo-upload');
        if (fileInput) fileInput.value = '';
    };

    // Handle Enter key untuk submit
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleSubmit();
        }
    };

    // Fungsi untuk clear semua data
    const clearAllData = () => {
        if (window.confirm('Apakah Anda yakin ingin menghapus semua pesan?')) {
            setComments([]);
            setShowHiddenBtn(false);
            try {
                if (typeof localStorage !== 'undefined') {
                    localStorage.removeItem('chatComments');
                }
            } catch (error) {
                console.error('Error clearing storage:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white">
            {/* Header */}
            <div className="bg-gray-800/10 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-6 py-4">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Join the Chat
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">Whether it’s a question, feedback, or just a vibe check, i love to hear from you! If you're lucky, you might get a gift from me, hahaha</p>
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
                                            onClick={() => setProfilePhoto('')}
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
                                href="/gifts/flower.html"
                                className="mt-4 block text-center bg-white text-black p-3 rounded-xl shadow-lg hover:bg-grey-200 transition-all"
                            >
                                there's a gift for you! thanks btw 
                            </a>
                        )}
                    </div>
                </div>

                {/* Chat Bubbles */}
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
                                        src={comment.profilePhoto}
                                        alt={`${comment.name} avatar`}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-600 shadow-lg"
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.name)}&background=374151&color=fff`;
                                        }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-semibold text-white">{comment.name}</p>
                                            <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                                                {comment.time}
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


                {/* Footer Info & Clear Button */}
                {comments.length > 0 && (
                    <div className="mt-8 flex items-center justify-between text-gray-500 text-sm">
                        <span className="flex items-center gap-2">
                            {comments.length} message saved
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