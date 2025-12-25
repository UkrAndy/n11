import { __dirname } from '../settings.mjs'
import path from 'path'
import fs from 'fs'

export function deleteFile(dirname, fileName) {
  const imgPath = path.join(__dirname, dirname, fileName)
  if (fs.existsSync(imgPath)) {
    fs.unlinkSync(imgPath)
  }
}

export function checkExistingDirectory(dirname = 'uploads') {
  const uploadDir = path.join(__dirname, dirname)
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }
}
