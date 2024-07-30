import { Component } from 'preact';

export class Status extends Component {
  state = { data: null }
  componentDidMount() {
    // Fetch events
    fetch('/api/status')
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({ data: result })
      })
  }

  render({ }, { data }) {
    if (!data) {
      return (
        <div class="loading">Loading Status...</div>
      )
    }

    if (data.count == 0) {
      return (
        <div>No Status return.</div>
      )
    }

    return (
      <div class="resource">
        <h3>Status</h3>
        <code>
          <pre>
            {JSON.stringify(data.result, null, 2)}
          </pre>
        </code>
      </div>
    )
  }
}