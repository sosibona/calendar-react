const baseUrl = "https://5e6b6f91d708a000160b48ba.mockapi.io/api/v1/events";

export const fetchEventsList = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(eventsList => eventsList)
}

export const fetchEvents = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((events) =>
      this.setState({
        events: events,
      })
    );
};

export const deleteEvent = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
    })
}

export const createEvent = newEvent => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newEvent),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Faild to create task");
      }
    });
}