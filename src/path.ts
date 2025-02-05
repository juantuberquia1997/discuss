const paths = {
  homePage() {
    return "/"
  },
  topicToShow(slug: string) {
    return `/topics/${slug}`
  },
  createPost(slug: string) {
    return `/topics/${slug}/post/new`
  },
  showPost(slug: string, postId: string) {
    return `/topics/${slug}/posts/${postId}`
  }
}

export default paths