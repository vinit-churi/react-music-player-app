export default async function getGenreImage(genre) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&orientation=landscape&per_page&query=${genre}&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }`
    );
    const {
      results: [{ urls }],
    } = await response.json();
    return urls;
  } catch (error) {
    console.error(error);
    return {
      raw: "https://images.unsplash.com/photo-1677191203816-4da0d92214cc?ixid=M3w1MDIwODR8MHwxfHNlYXJjaHwxfHxpbnN0cnVtZW50YWwlMjBtdXNpY3xlbnwwfDB8fHwxNjk0NjY5NDY4fDA&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1677191203816-4da0d92214cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MDIwODR8MHwxfHNlYXJjaHwxfHxpbnN0cnVtZW50YWwlMjBtdXNpY3xlbnwwfDB8fHwxNjk0NjY5NDY4fDA&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1677191203816-4da0d92214cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDIwODR8MHwxfHNlYXJjaHwxfHxpbnN0cnVtZW50YWwlMjBtdXNpY3xlbnwwfDB8fHwxNjk0NjY5NDY4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1677191203816-4da0d92214cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDIwODR8MHwxfHNlYXJjaHwxfHxpbnN0cnVtZW50YWwlMjBtdXNpY3xlbnwwfDB8fHwxNjk0NjY5NDY4fDA&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1677191203816-4da0d92214cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDIwODR8MHwxfHNlYXJjaHwxfHxpbnN0cnVtZW50YWwlMjBtdXNpY3xlbnwwfDB8fHwxNjk0NjY5NDY4fDA&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677191203816-4da0d92214cc",
    };
  }
}
