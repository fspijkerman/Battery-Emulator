import './style.css';
import { EventList } from '../../components/EventList';

export function Events() {
  return (
    <div class="events">
      <h3>Events</h3>
      <EventList />
    </div>
  );
}
