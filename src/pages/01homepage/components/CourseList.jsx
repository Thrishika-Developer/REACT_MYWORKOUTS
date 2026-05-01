export default function CourseList() {
  const Courses = ["python", "java", "AI", "React", "Mean stack"];

  return (
    <div>
      <h1>
        <u>Courses</u>
      </h1>
      <nav>
        <ul>
          {Courses.map((value, key) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </nav>
      <hr />
    </div>
  );
}
