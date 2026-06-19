function MarksTable() {
  return (
    <section className="card">
      <h2>Semester Results</h2>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>HTML</td>
            <td>95</td>
            <td>A+</td>
          </tr>

          <tr>
            <td>CSS</td>
            <td>92</td>
            <td>A+</td>
          </tr>

          <tr>
            <td>React</td>
            <td>89</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default MarksTable;