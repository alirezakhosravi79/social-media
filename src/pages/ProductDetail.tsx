// src/pages/ProductDetail.tsx یا در Next.js: app/product/[id]/page.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // اگر React Router استفاده می‌کنی

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  discount_price: string;
  stock: number;
  is_available: boolean;
  images: { id: number; image: string; is_main: boolean }[];
  category: {
    id: number;
    name: string;
    slug: string;
  };
};

export default function ProductDetail() {
  const { id } = useParams(); // گرفتن id از URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://apidoni.ir/api/products/")
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error("خطا در دریافت محصول:", err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center p-10">در حال بارگذاری...</p>;
  if (!product) return <p className="text-center p-10">محصولی یافت نشد.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* تصویر محصول */}
      <div>
        <img
          src={product.images.find((img) => img.is_main)?.image || ""}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl"
        />
        {/* تصاویر بیشتر */}
        <div className="flex gap-2 mt-4">
          {product.images.map((img) => (
            <img
              key={img.id}
              src={img.image}
              className="w-20 h-20 object-cover rounded border"
              alt="thumbnail"
            />
          ))}
        </div>
      </div>

      {/* اطلاعات محصول */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-sm text-gray-600 mb-4">{product.category.name}</p>

          <div className="mb-4">
            <span className="text-red-600 text-xl font-semibold">
              {Number(product.discount_price).toLocaleString()} تومان
            </span>
            <span className="text-gray-400 line-through ml-3">
              {Number(product.price).toLocaleString()} تومان
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        <div className="mt-6">
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
