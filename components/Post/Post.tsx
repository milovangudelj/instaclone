import { type PostType } from "../../types"

export const Post = ({data}:{data:Omit<PostType,'id'>}) => {
	return <div>{data.description}</div>
}