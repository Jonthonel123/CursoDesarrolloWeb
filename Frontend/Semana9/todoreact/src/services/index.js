const url = "https://6363105f66f75177ea3c9364.mockapi.io/tareas";
const urlUsers = "https://6363105f66f75177ea3c9364.mockapi.io/users";
const urlBooks = "https://www.googleapis.com/books/v1/volumes?q=";

export const getBooks = async (search) => {
  try {
    const response = await fetch(`${urlBooks}${search}&maxResults=24`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const userGithub = async () => {
  try {
    const response = await fetch("https://api.github.com/users/Jonthonel123");
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const get = async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getById = async (id) => {
  try {
    const response = await fetch(url + "/" + id);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getUsers = async () => {
  try {
    const response = await fetch(urlUsers);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const post = async (body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const postUser = async (user) => {
  try {
    const response = await fetch(urlUsers, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const update = async (id, body) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const destroy = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json;
    return data;
  } catch (error) {
    console.log(error);
  }
};
