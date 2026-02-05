// src/components/PageHeader.tsx
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
}

export default function PageHeader({ title, subtitle, imageUrl, imageAlt = "Header Image" }: PageHeaderProps) {
  return (
    // Tinggi lebih pendek dari homepage (h-[50vh] atau min-400px)
    <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center text-white overflow-hidden">
       
       {/* Background Image & Overlay Gelap */}
       <div className="absolute inset-0 z-0">
          <Image 
            src={imageUrl} 
            alt={imageAlt} 
            fill 
            className="object-cover"
            priority
          />
          {/* Overlay gradient agar teks terbaca jelas */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-sky-900/90 via-black/30 to-black/50"></div>
       </div>

       {/* Konten Teks */}
       {/* pt-20 agar tidak tertutup navbar */}
       <div className="container mx-auto text-center relative z-10 px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-2xl text-sky-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
              {subtitle}
            </p>
          )}
          <div className="mt-8 w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
       </div>
    </section>
  );
}