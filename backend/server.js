import express from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// CONFIGURAÇÃO DO EMAIL
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// ROTA
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body

  try {
    await transporter.sendMail({
      from: `"Site" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Novo contato do site",
      html: `
        <h2>Novo contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error("Erro:", error)
    res.status(500).json({ success: false })
  }
})

// START
app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001")
})