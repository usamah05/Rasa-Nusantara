export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            Copyright 2025
          </p>
          <p className="text-xs text-muted-foreground mt-2" data-testid="text-footer-description">
            Celebrating Indonesian culinary heritage through technology
          </p>
        </div>
      </div>
    </footer>
  );
}