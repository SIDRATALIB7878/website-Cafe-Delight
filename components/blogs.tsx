import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Blogs() {
  const blogPosts = [
    {
      title: "The Art of Coffee Brewing",
      excerpt: "Discover the secrets behind brewing the perfect cup of coffee at home.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Brewing Tips",
      image: "/brewing-coffee.jpeg",
      readTime: "5 min read",
    },
    {
      title: "Coffee Bean Origins: A Journey Around the World",
      excerpt: "Explore the different coffee growing regions and their unique flavor profiles.",
      author: "Mike Chen",
      date: "March 10, 2024",
      category: "Coffee Culture",
      image: "/pexels-jacobyavin-4085291.jpg",
      readTime: "8 min read",
    },
    {
      title: "Latte Art: Creating Beautiful Designs",
      excerpt: "Learn the techniques to create stunning latte art that will impress your guests.",
      author: "Emma Davis",
      date: "March 5, 2024",
      category: "Barista Skills",
      image: "/design.avif",
      readTime: "6 min read",
    },
    {
      title: "Sustainable Coffee: Our Commitment to the Environment",
      excerpt: "How we source our coffee beans ethically and support sustainable farming practices.",
      author: "David Wilson",
      date: "February 28, 2024",
      category: "Sustainability",
      image: "/pexels-michael-burrows-7125744.jpg",
      readTime: "7 min read",
    },
    {
      title: "The Perfect Pairing: Coffee and Pastries",
      excerpt: "Discover which pastries complement different coffee varieties for the ultimate experience.",
      author: "Lisa Brown",
      date: "February 20, 2024",
      category: "Food Pairing",
      image: "/Coffee and Pastries.jpg",
      readTime: "4 min read",
    },
    {
      title: "Cold Brew vs Iced Coffee: What's the Difference?",
      excerpt: "Understanding the brewing methods and taste differences between cold brew and iced coffee.",
      author: "Tom Anderson",
      date: "February 15, 2024",
      category: "Brewing Tips",
      image: "/Cold Brew vs Iced Coffee.jpeg",
      readTime: "5 min read",
    },
  ]

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Coffee Chronicles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest coffee trends, brewing tips, and stories from our cafe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-amber-600">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{post.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <Badge className="bg-amber-600">{post.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
