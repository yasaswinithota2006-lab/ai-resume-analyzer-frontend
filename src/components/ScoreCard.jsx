function ScoreCard({ result }) {
  return (
    <div className="card">
      <h3>Resume Score</h3>

      <h1>{result.score}%</h1>

      <p>{result.feedback}</p>
    </div>
  );
}

export default ScoreCard;