import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export function ImageSlideshow() {
const images = [
"https://via.placeholder.com/300/0000FF",
"https://via.placeholder.com/300/FF0000",
"https://via.placeholder.com/300/00FF00",
]


const [index, setIndex] = useState(0)


return (
<Card className="max-w-md text-center">
<CardHeader>
<CardTitle>Image Slideshow</CardTitle>
</CardHeader>
<CardContent className="space-y-3">
<img src={images[index]} className="mx-auto rounded" />
<div className="flex justify-between">
<Button onClick={() => setIndex((index - 1 + images.length) % images.length)}>Previous</Button>
<Button onClick={() => setIndex((index + 1) % images.length)}>Next</Button>
</div>
</CardContent>
</Card>
)
}