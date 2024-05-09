import React, { useState } from 'react';
import { Label, Select, TextInput, Textarea, Button } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

function EditBooks() {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

  const bookCategories = ["Fiction", "Non-Fiction", "Mistery", "Programming", "Science Fiction", "Fantasy",
    "Horror", "Bibliography", "Autobiography", "History", "Self-help", "Memoir", "Business", "Children Books",
    "Travel", "Religion", "Art and Design"]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL }
    // console.log(bookObj);

    // update book data
    fetch(`http://localhost:7000/book/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book is Updated Successfully!!!")
    })


  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update A Book Data</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>

        {/* first row */}
        <div className='flex gap-8'>
          {/* book name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required defaultValue={bookTitle} />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName} />
          </div>
        </div>

        {/*second row  */}
        <div className='flex gap-8'>
          {/* book image url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required defaultValue={imageURL} />
          </div>

          {/* category name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
              onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) =>
                  <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>
        </div>

        {/* third row */}
        {/* book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name='bookDescription' placeholder="Write your Book Description"
            className='w-full' required rows={6} defaultValue={bookDescription} />
        </div>

        {/* 4th row */}
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required defaultValue={bookPDFURL} />
        </div>

        {/* upload button */}
        <Button type="submit" className='mt-5'>Update Book</Button>

      </form>
    </div>
  )
}

export default EditBooks;