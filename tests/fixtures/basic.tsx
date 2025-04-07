export default () => {
  let value = $ref('foo')
  function onInput(e: any) {
    value = e.target?.value
  }
  return (
    <>
      <input
        {value}
        {onInput}
      />
    </>
  )
}
