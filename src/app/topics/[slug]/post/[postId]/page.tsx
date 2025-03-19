
interface Props {
  params: {
    postId: string
  }
}
const ShowPost = ({ params: { postId } }: Props) => {
  return (
    <div>show post page with id: {postId}</div>
  )
}

export default ShowPost