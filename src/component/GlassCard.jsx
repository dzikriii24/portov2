const GlassCard = ({ children }) => {
  return (
  <div className="absolute inset-0 bg-white/5 backdrop-blur-lg z-0">
      {children}
    </div>
  )
}
export default GlassCard
