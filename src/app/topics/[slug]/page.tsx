

interface Props {
  params: {
    slug: string
  }
}

const TopicToShow = ({ params: {
  slug
} }: Props) => {

  return (
    <div>page {slug}</div>
  )
}

export default TopicToShow