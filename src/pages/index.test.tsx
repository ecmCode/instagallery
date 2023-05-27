import { cleanup, render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "./index";
import "@testing-library/jest-dom";

// Mock the API data for testing
// const mockedFetch = jest.fn().mockResolvedValue({
//     json: () => Promise.resolve([
//         { id: 1, title: 'Photo 1' },
//         { id: 2, title: 'Photo 2' },
//         { id: 3, title: 'Photo 3' },
//       ]),
//   });

// global.fetch = mockedFetch;

const mockedFetch = jest.fn().mockResolvedValue({
  json: () =>
    Promise.resolve([
      { id: 1, title: "Photo 1" },
      { id: 2, title: "Photo 2" },
      { id: 3, title: "Photo 3" },
    ]),
});
global.fetch = mockedFetch;

describe("Home", () => {
  beforeEach(() => render(<Home photos={[]} />));
  afterEach(() => cleanup());
  it("renders the home page with title and search message", () => {
    expect(screen.getByText("Instagallery")).toBeInTheDocument();
    expect(
      screen.getByText("Search your favorite pics here")
    ).toBeInTheDocument();
  });

  it('displays "Enter at least 3 characters" message when search input is less than 3 characters', () => {
    const searchInput = screen.getByRole("textbox");
    searchInput.innerText = "ab";
    expect(
      screen.getByText("Enter at least 3 characters to get results.")
    ).toBeInTheDocument();
  });

  //   it('displays "Waiting..." message when loading is true and search input has 3 or more characters', () => {
  //     const searchInput = screen.getByRole('textbox');
  //     searchInput.innerText = 'abc';
  //     expect(screen.getByText('Waiting...')).toBeInTheDocument();
  //   });

  //   it('displays "No result found" message when search input has 3 or more characters, loading is false, and filteredGallery is empty', () => {
  //     const searchInput = screen.getByRole('textbox');
  //     searchInput.innerText = 'abc';
  //     expect(screen.getByText('No result found. Search for something else')).toBeInTheDocument();
  //   });

  // Add more test cases as needed for different scenarios and functionalities
});

describe("getStaticProps", () => {
  it("fetches data and returns it as props", async () => {
    const { props } = await getStaticProps();
    expect(props.photos.length).toBe(3);
    expect(props.photos[0].id).toBe(1);
    expect(props.photos[0].title).toBe("Photo 1");
    // Add more assertions based on the expected data
  });
});
