export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50 pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-red-900 mb-4">Resume</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-amber-600 mx-auto"></div>
          <p className="text-xl text-red-700 mt-6">
            My professional journey and experiences
          </p>
        </div>

        {/* Add your resume content here */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-amber-200/50">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Experience</h2>
          <p className="text-red-700">Your experience details here...</p>
        </div>
      </div>
    </div>
  )
}