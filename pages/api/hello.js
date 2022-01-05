// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { BOOM, CHAKA } = process.env
  res.status(200).json({ name: 'John Doe', BOOM, CHAKA })
}
