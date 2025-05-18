export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-red-500">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Entrar</h2>
        <input type="email" placeholder="Email" className="border rounded p-2 w-full mb-2" />
        <input type="password" placeholder="Senha" className="border rounded p-2 w-full mb-2" />
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded w-full">Login</button>
      </div>
    </div>
  )
}
