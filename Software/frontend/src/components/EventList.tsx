import { Component } from 'preact';

export class EventList extends Component {
  state = { data: null }
  componentDidMount() {
    // Fetch events
    fetch('/api/events')
      .then(response => response.json())
      .then(result => {
        this.setState({ data: result })
      })
  }

  render({}, { data }) {
    if (!data) {
      return (
        <div>
          Loading Events...
        </div>
      )
    }

    if (data.count == 0) {
      return (
        <div>
          No Events.
        </div>
      )
    }

    return (
      <table class="striped">
        <thead>
          <tr>
            <th scope="col">Event Type</th>
            <th scope="col">Severity</th>
            <th scope="col">Time</th>
            <th scope="col">Count</th>
            <th scope="col">Data</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.result.map((e: any) => (
            <tr>
              <td>{e.event_type}</td>
              <td>{e.severity}</td>
              <td>{new Date(Date.now() - e.last_event * 1000).toUTCString()}</td>
              <td>{e.count}</td>
              <td>{e.data}</td>
              <td>{e.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}