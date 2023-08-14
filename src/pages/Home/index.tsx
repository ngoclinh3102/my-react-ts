import React, { FC } from 'react'

enum Test {
  A = 10,
  B = 20,
  C = 30
}

const HomePage: FC = () => {
  const x = 'A'
  console.log(Test.A, x)
  return <div>Home Page</div>
}

export default React.memo(HomePage)
