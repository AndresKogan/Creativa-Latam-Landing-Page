
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-brand-dark"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="text-center p-8 bg-brand-dark bg-opacity-80 rounded-lg">
        <h1 className="text-6xl font-bold text-brand-red mb-4">404</h1>
        <p className="text-xl text-white mb-8">Oops! Page not found</p>
        <Link to="/">
          <Button className="bg-brand-lightBlue hover:bg-brand-lightBlue/90">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
