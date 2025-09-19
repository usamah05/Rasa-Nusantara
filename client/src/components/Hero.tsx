export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDAgTDI1IDEwIEwzNSAxMCBMMjcuNSAxNyBMMzAgMjcgTDIwIDIyIEwxMCAyNyBMMTIuNSAxNyBMNSAxMCBMMTUgMTAgTDIwIDBaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPgo8L3N2Zz4K')] opacity-30" />
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight" data-testid="text-hero-title">
          Explore the culinary world of the<br />
          <span className="text-primary">Indonesian archipelago</span><br />
          and explore the richness of flavors
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-hero-subtitle">
          Discover authentic Indonesian recipes with AI-powered analysis. Upload an image or describe a dish to unlock its secrets, ingredients, and cultural heritage.
        </p>
      </div>
    </section>
  );
}