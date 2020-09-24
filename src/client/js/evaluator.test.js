import { updateUI } from './evaluator'

test('evaluate url for polarity and subjectivity', () => {
  document.body.innerHTML = `
    <section>
      <strong>Evaluation Results:</strong>
      <div class="results" id="agreement"></div>
      <div class="results" id="subjectivity"></div>
    </section>
    `;
  updateUI({
    agreement: 'positive',
    subjectivity: 'subjective',
    text: 'Friends is the best tv serie.',
    polarity_confidence: 0.8764857649803162,
    subjectivity_confidence: 1
  });
  expect(document.getElementById('agreement').innerHTML).toBe('agreement: positive');
  expect(document.getElementById('subjectivity').innerHTML).toBe('Subjectivity: subjective');
});