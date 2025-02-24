"use client"
const Footer = () => {
  return (
    <footer className="py-6 bg-background text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Karan Shingde. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

