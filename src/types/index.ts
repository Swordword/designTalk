export type imageInfo = {
  id: number,
  title: string,
  thumbnail: string,
  originHerf: string
}
export type Props = {

}
export type State = {
  imageList: imageInfo[],
  loading: boolean
}
export type response = {
  code: number,
  msg: string,
  data: imageInfo[]
}