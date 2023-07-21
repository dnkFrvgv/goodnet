interface plan{
  title:string
  mega: number
  price: string
  vantagem1: string
  vantagem2: string
  vantagem3: string
  className: string
}

const Plans: plan[] = [
  { 
    title:'super',
    mega: 100,
    price: "59,90",
    vantagem1: "lorem",
    vantagem2: "lorem",
    vantagem3: "lorem",
    className: "plan-card"
  },
  {
    title:'turbo',
    mega: 150,
    price: "79,90",
    vantagem1: "lorem",
    vantagem2: "lorem",
    vantagem3: "lorem",
    className: "plan-card special"

  },
  {
    title:'ultra',
    mega: 200,
    price:"99,90",
    vantagem1: "lorem",
    vantagem2: "lorem",
    vantagem3: "lorem",
    className: "plan-card"

  }
]

export default Plans;