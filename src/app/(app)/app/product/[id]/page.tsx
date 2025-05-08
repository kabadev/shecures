"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);

  // This would normally be fetched from an API based on the ID
  const product = {
    id: Number.parseInt(params.id),
    name: "Eco-Friendly Reusable Pads (Pack of 3)",
    price: 250000,
    category: "Menstruation",
    images: [
      "https://sevenmakes.com/cdn/shop/products/image_152695e6-877e-4a98-a23a-7079175cf5ec.jpg?v=1654679546",
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop",
      "/she1.png",
    ],
    rating: 4.8,
    reviews: 124,
    description:
      "Our eco-friendly reusable pads are made from 100% organic cotton, providing comfort and protection while being kind to the environment. Each pad is designed to be soft, absorbent, and leak-proof, with wings that snap securely in place. This pack includes 3 pads of different absorbency levels to suit your needs throughout your cycle.",
    features: [
      "Made from 100% GOTS certified organic cotton",
      "Soft, breathable, and comfortable to wear",
      "Leak-proof backing layer",
      "Snap wings for secure placement",
      "Machine washable and reusable for up to 2 years",
      "Reduces environmental impact compared to disposable products",
    ],
    specifications: {
      Material: "100% Organic Cotton with PUL backing",
      "Sizes Included": "1 Light, 1 Medium, 1 Heavy",
      Dimensions: 'Light: 8" x 3", Medium: 9" x 3", Heavy: 10" x 3.5"',
      "Care Instructions": "Machine wash cold, hang dry or tumble dry low",
      "Package Contents": "3 Reusable Pads, 1 Waterproof Carrying Pouch",
      "Country of Origin": "Sierra Leone",
    },
    inStock: true,
    relatedProducts: [4, 7, 1, 3],
  };

  // Format price in SLE currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-SL", {
      style: "currency",
      currency: "SLE",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Sample related products
  const relatedProducts = [
    {
      id: 4,
      name: "Natural Menstrual Pain Relief Oil",
      price: 120000,
      category: "Menstruation",
      image:
        "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop",
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 7,
      name: "Menstrual Cup (Medium)",
      price: 150000,
      category: "Menstruation",
      image:
        "https://sevenmakes.com/cdn/shop/products/image_152695e6-877e-4a98-a23a-7079175cf5ec.jpg?v=1654679546",
      rating: 4.7,
      reviews: 203,
    },
    {
      id: 1,
      name: "Organic Cotton Menstrual Pads (Pack of 10)",
      price: 180000,
      category: "Menstruation",
      image: "/she1.png",
      rating: 4.5,
      reviews: 92,
    },
    {
      id: 3,
      name: "Bamboo Nursing Bra",
      price: 180000,
      category: "Pregnancy",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=2071&auto=format&fit=crop",
      rating: 4.7,
      reviews: 56,
    },
  ];

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Sample reviews
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      date: "2 months ago",
      rating: 5,
      comment:
        "These reusable pads have changed my life! They're so comfortable and easy to use. I was hesitant at first, but now I'll never go back to disposables. They wash well and have saved me so much money already.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Aminata K.",
      date: "1 month ago",
      rating: 4,
      comment:
        "Very comfortable and absorbent. I love that they're eco-friendly. The only reason I'm giving 4 stars instead of 5 is that I wish they came in more patterns/colors. Otherwise, they're perfect!",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Fatmata J.",
      date: "3 weeks ago",
      rating: 5,
      comment:
        "Excellent quality! The organic cotton is so soft against my skin, and I haven't experienced any leaks. The carrying pouch is a nice touch for when I'm on the go. Highly recommend!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className=" px-4 md:px-6 py-4">
          <nav className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/category/menstruation"
              className="hover:text-foreground"
            >
              Menstruation
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <section className=" px-4 md:px-6 py-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border cursor-pointer"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - View ${index + 1}`}
                      width={180}
                      height={180}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="text-2xl font-bold">
                {formatPrice(product.price)}
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-4">Quantity:</span>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decrementQuantity}
                      className="h-9 w-9 rounded-none"
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-10 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={incrementQuantity}
                      className="h-9 w-9 rounded-none"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="sm:flex-1" size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="sm:flex-1">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Availability:</span>
                  <span className="font-medium text-green-600">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Category:</span>
                  <Link
                    href={`/category/${product.category.toLowerCase()}`}
                    className="font-medium hover:underline"
                  >
                    {product.category}
                  </Link>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Share:</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share product</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className=" px-4 md:px-6 py-8">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="py-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="py-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Product Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="flex flex-col space-y-1">
                        <span className="text-sm font-medium">{key}</span>
                        <span className="text-sm text-muted-foreground">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-4">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <div className="font-medium">{review.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {review.comment}
                      </p>
                      <Separator className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Related Products */}
        <section className=" px-4 md:px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card className="h-full overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground">
                        {product.category}
                      </span>
                      <h3 className="font-semibold truncate">{product.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="font-semibold">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
