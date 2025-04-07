import { defineComponent } from 'vue'

export default defineComponent(() => {
  let value = $ref('foo')
  function onInput(e: any) {
    value = e.target?.value
  }
  return () => (
    <>
      <input
        {value}
        {onInput}
      />

      {value}
    </>
  )
})
