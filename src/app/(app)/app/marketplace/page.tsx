import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart, ShoppingCart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MobileFooter } from "@/components/MobileFooter";
import Footer from "@/components/Footer";

export default function Home() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Eco-Friendly Reusable Pads (Pack of 3)",
      price: 250000,
      category: "Menstruation",
      image: "/she1.png",
      rating: 4.8,
      reviews: 124,
      isNew: true,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Organic Cotton Maternity Dress",
      price: 450000,
      category: "Pregnancy",
      image:
        "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop",
      rating: 4.5,
      reviews: 89,
      isNew: false,
      isFeatured: true,
    },
    {
      id: 3,
      name: "Bamboo Nursing Bra",
      price: 180000,
      category: "Pregnancy",
      image: "/she2.png",
      rating: 4.7,
      reviews: 56,
      isNew: true,
      isFeatured: false,
    },
    {
      id: 4,
      name: "Natural Menstrual Pain Relief Oil",
      price: 120000,
      category: "Menstruation",
      image:
        "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop",
      rating: 4.6,
      reviews: 78,
      isNew: false,
      isFeatured: true,
    },
    {
      id: 5,
      name: "Organic Baby Clothing Set",
      price: 200000,
      category: "Baby",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=2071&auto=format&fit=crop",
      rating: 4.9,
      reviews: 112,
      isNew: true,
      isFeatured: true,
    },
    {
      id: 6,
      name: "Pregnancy Support Belt",
      price: 300000,
      category: "Pregnancy",
      image:
        "https://sevenmakes.com/cdn/shop/products/image_152695e6-877e-4a98-a23a-7079175cf5ec.jpg?v=1654679546",
      rating: 4.4,
      reviews: 45,
      isNew: false,
      isFeatured: false,
    },
    {
      id: 7,
      name: "Menstrual Cup (Medium)",
      price: 150000,
      category: "Menstruation",
      image: "/she2.png",
      rating: 4.7,
      reviews: 203,
      isNew: false,
      isFeatured: true,
    },
    {
      id: 8,
      name: "Natural Baby Diaper Rash Cream",
      price: 85000,
      category: "Baby",
      image: "/she1.png",
      rating: 4.8,
      reviews: 67,
      isNew: true,
      isFeatured: false,
    },
    {
      id: 9,
      name: "Postpartum Recovery Kit",
      price: 500000,
      category: "Pregnancy",
      image:
        "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop",
      rating: 4.9,
      reviews: 34,
      isNew: true,
      isFeatured: true,
    },
    {
      id: 10,
      name: "Organic Baby Teething Toys",
      price: 120000,
      category: "Baby",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=2071&auto=format&fit=crop",
      rating: 4.6,
      reviews: 89,
      isNew: false,
      isFeatured: false,
    },
  ];

  // Format price in SLE currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-SL", {
      style: "currency",
      currency: "SLE",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Get featured products
  const featuredProducts = products.filter((product) => product.isFeatured);

  // Get new products
  const newProducts = products.filter((product) => product.isNew);

  // Get all categories
  const categories = [
    {
      name: "Menstruation",
      icon: "🌸",
      count: products.filter((p) => p.category === "Menstruation").length,
    },
    {
      name: "Pregnancy",
      icon: "🤰",
      count: products.filter((p) => p.category === "Pregnancy").length,
    },
    {
      name: "Baby",
      icon: "👶",
      count: products.filter((p) => p.category === "Baby").length,
    },
    { name: "Wellness", icon: "✨", count: 12 },
    { name: "Hygiene", icon: "🧼", count: 8 },
  ];

  return (
    <div className="flexf flex-col min-h-screen">
      <main className="flex-">
        {/* Hero Banner */}
        <section className="w-full py-10 md:py-24 lg:py-32 bg-[#FFF5F7]">
          <div className=" px-4 md:px-6">
            <div className="flex max-md:flex-col w-full gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex w-full flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {` Empowering Women's Health & Wellness`}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover our premium selection of sustainable, eco-friendly
                    products for women and babies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/app/marketplace">
                    <Button size="lg" className="px-8">
                      Shop Now
                    </Button>
                  </Link>
                  <Link href="/categories">
                    <Button size="lg" variant="outline" className="px-8">
                      Explore Categories
                    </Button>
                  </Link>
                </div>
              </div>
              <div className=" w-full flex justify-center">
                <Image
                  src="/1.png"
                  width={500}
                  height={500}
                  alt="Hero Image"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Categories
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our wide range of products designed for every stage of
                  womanhood
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`#`}
                  className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-4xl mb-3">{category.icon}</span>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} Products
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Recommended Products
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our most loved products, carefully selected for you
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {featuredProducts.slice(0, 4).map((product) => (
                <Link key={product.id} href={`/app/product/${product.id}`}>
                  <Card className="h-full overflow-hidden group">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full bg-white/80 hover:bg-white"
                        >
                          <Heart className="h-4 w-4" />
                          <span className="sr-only">Add to wishlist</span>
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          {product.category}
                        </span>
                        <h3 className="font-semibold truncate">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          <span className="text-sm font-medium">
                            {product.rating}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex items-center justify-between">
                      <div className="font-semibold">
                        {formatPrice(product.price)}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 rounded-full"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/appp/marketplace">
                <Button variant="outline" className="gap-1">
                  View All Products
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Products */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className=" px-4 md:px-6">
            <Tabs defaultValue="latest" className="w-full">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Products
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Quality products for women and babies
                  </p>
                </div>
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="latest">Latest Arrivals</TabsTrigger>
                  <TabsTrigger value="bestsellers">Bestsellers</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="latest" className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {newProducts.map((product) => (
                    <Link key={product.id} href={`/app/product/${product.id}`}>
                      <Card className="h-full overflow-hidden group">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          {product.isNew && (
                            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                              NEW
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-1">
                            <span className="text-xs text-muted-foreground">
                              {product.category}
                            </span>
                            <h3 className="font-semibold truncate">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-primary text-primary" />
                              <span className="text-sm font-medium">
                                {product.rating}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                ({product.reviews})
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex items-center justify-between">
                          <div className="font-semibold">
                            {formatPrice(product.price)}
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 rounded-full"
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="bestsellers" className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products
                    .sort((a, b) => b.reviews - a.reviews)
                    .slice(0, 4)
                    .map((product) => (
                      <Link
                        key={product.id}
                        href={`/app/product/${product.id}`}
                      >
                        <Card className="h-full overflow-hidden group">
                          <div className="relative aspect-square overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={300}
                              height={300}
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">
                              BESTSELLER
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className="space-y-1">
                              <span className="text-xs text-muted-foreground">
                                {product.category}
                              </span>
                              <h3 className="font-semibold truncate">
                                {product.name}
                              </h3>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-primary text-primary" />
                                <span className="text-sm font-medium">
                                  {product.rating}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  ({product.reviews})
                                </span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex items-center justify-between">
                            <div className="font-semibold">
                              {formatPrice(product.price)}
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 rounded-full"
                            >
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add
                            </Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-[#FFF5F7]">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stay Updated
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {` Subscribe to our newsletter for exclusive offers, new
                  arrivals, and women's health tips.`}
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileFooter />
      <Footer />
    </div>
  );
}
