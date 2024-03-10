const Divider = ({ width = "60", height = "1", fill = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={fill} />
    </svg>
  )
}

export default Divider
