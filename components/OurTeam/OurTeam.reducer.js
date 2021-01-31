const initialState = [
  {
    name: "Williamson",
    designation: "Web Developer",
    image: "images/img-1.jpg",
    about:
      "Williamson ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. ",
  },
  {
    name: "Kristiana",
    designation: "App Developer",
    image: "images/img-2.jpg",
    about:
      "Kristiana ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. ",
  },
  {
    name: "Steve Thomas",
    designation: "UI Designer",
    image: "images/img-3.jpg",
    about:
      "Steve Thomas ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. ",
  },
  {
    name: "Williamson",
    designation: "Web Developer",
    image: "images/img-1.jpg",
    about:
      "Williamson ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. ",
  },
];

export default function ourTeamReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
