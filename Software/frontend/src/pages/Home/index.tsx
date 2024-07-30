import { Status } from '../../components/Status';
import './style.css';

export function Home() {
  return (
    <div class="home">
      <section>
        <Status />
        <Status />
      </section>
    </div>
  );
}

// function Resource(props) {
//   return (
//     <a href={props.href} target="_blank" class="resource">
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </a>
//   );
// }
