"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
  Image as ImageIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentationSidebar from "@/components/DocumentationSidebar";


/* ============================================================
   ON THIS PAGE
============================================================ */

const sections = [
  {
    id: "file-requirements",
    label: "File Requirements",
  },
  {
    id: "image-dimensions",
    label: "Image Dimensions",
  },
  {
    id: "resize-images",
    label: "Need to Resize Your Images?",
  },
];


/* ============================================================
   PAGE
============================================================ */

export default function ImageSizeGuidePage() {

  const [activeSection, setActiveSection] =
    useState("file-requirements");


  /* ============================================================
     ACTIVE TOC SECTION
  ============================================================ */

  useEffect(() => {

    const handleScroll = () => {

      const position =
        window.scrollY + 180;

      let current =
        sections[0].id;

      sections.forEach((section) => {

        const element =
          document.getElementById(
            section.id
          );

        if (!element) return;

        if (
          element.offsetTop <= position
        ) {
          current = section.id;
        }

      });

      setActiveSection(current);
    };


    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);


  return (
    <>
      {/* ======================================================
          SELLIO HEADER
      ====================================================== */}

      <Navbar />


      {/* ======================================================
          DOCUMENTATION
      ====================================================== */}

      <main
        className="
          min-h-screen
          bg-paper
          text-navy
        "
      >

        <div
          className="
            container-xl
            grid
            gap-10
            py-12
            lg:grid-cols-[250px_minmax(0,1fr)_210px]
          "
        >

          {/* ==================================================
              LEFT SIDEBAR
          ================================================== */}

          <DocumentationSidebar />


          {/* ==================================================
              MAIN ARTICLE
          ================================================== */}

          <article
            className="
              min-w-0
            "
          >

            {/* ==================================================
                PAGE HEADER
            ================================================== */}

            <header
              className="
                border-b
                border-border
                pb-8
              "
            >

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-coral
                "
              >
                Helpful Info
              </p>


              <div
                className="
                  mt-3
                  flex
                  items-start
                  gap-3
                "
              >

                <ImageIcon
                  className="
                    mt-1
                    h-6
                    w-6
                    shrink-0
                    text-coral
                  "
                />


                <h1
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                  "
                >
                  Image Size Guide
                </h1>

              </div>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use the right image sizes to keep your
                Sellio storefront looking professional,
                consistent, and fast for your customers.
              </p>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                This guide gives you practical recommendations
                for preparing product, banner, collection,
                and other storefront images before uploading
                them to Sellio.
              </p>

            </header>


            {/* ==================================================
                FILE REQUIREMENTS
            ================================================== */}

            <section
              id="file-requirements"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                File Requirements
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Before uploading an image, check its file
                format, dimensions, and overall file size.
                Properly prepared images can help your
                storefront load more efficiently.
              </p>


              <ul
                className="
                  mt-6
                  space-y-3
                "
              >

                {[
                  "Use JPEG, PNG, or WebP when appropriate for the image.",
                  "Keep image files as small as practical without making them look blurry.",
                  "Use consistent dimensions for images that appear together.",
                  "Avoid uploading unnecessarily large source files.",
                ].map((item) => (

                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >

                    <Check
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        text-coral
                      "
                    />

                    <span>
                      {item}
                    </span>

                  </li>

                ))}

              </ul>


              {/* ==================================================
                  IMAGE FORMAT CARD
              ================================================== */}

              <div
                className="
                  mt-6
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                "
              >

                <div
                  className="
                    grid
                    grid-cols-2
                    border-b
                    border-border
                    bg-black/5
                    px-4
                    py-3
                    text-xs
                    font-semibold
                    sm:grid-cols-3
                  "
                >

                  <span>
                    Format
                  </span>

                  <span>
                    Best For
                  </span>

                  <span
                    className="
                      hidden
                      sm:block
                    "
                  >
                    Notes
                  </span>

                </div>


                <div
                  className="
                    grid
                    grid-cols-2
                    border-b
                    border-border
                    px-4
                    py-4
                    text-sm
                    sm:grid-cols-3
                  "
                >

                  <span
                    className="
                      font-medium
                    "
                  >
                    WebP
                  </span>

                  <span
                    className="
                      text-navy-mute
                    "
                  >
                    Storefront images
                  </span>

                  <span
                    className="
                      hidden
                      text-navy-mute
                      sm:block
                    "
                  >
                    Good balance of quality and file size.
                  </span>

                </div>


                <div
                  className="
                    grid
                    grid-cols-2
                    border-b
                    border-border
                    px-4
                    py-4
                    text-sm
                    sm:grid-cols-3
                  "
                >

                  <span
                    className="
                      font-medium
                    "
                  >
                    JPEG
                  </span>

                  <span
                    className="
                      text-navy-mute
                    "
                  >
                    Product photography
                  </span>

                  <span
                    className="
                      hidden
                      text-navy-mute
                      sm:block
                    "
                  >
                    Useful for photographs and detailed images.
                  </span>

                </div>


                <div
                  className="
                    grid
                    grid-cols-2
                    px-4
                    py-4
                    text-sm
                    sm:grid-cols-3
                  "
                >

                  <span
                    className="
                      font-medium
                    "
                  >
                    PNG
                  </span>

                  <span
                    className="
                      text-navy-mute
                    "
                  >
                    Graphics and transparency
                  </span>

                  <span
                    className="
                      hidden
                      text-navy-mute
                      sm:block
                    "
                  >
                    Useful when transparency is required.
                  </span>

                </div>

              </div>


              {/* ==================================================
                  INFO CALLOUT
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-4
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <Info
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />

                  <p
                    className="
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    There is no single image size that works
                    for every storefront element. Choose
                    dimensions based on where the image will
                    appear and keep similar images consistent.
                  </p>

                </div>

              </div>

            </section>


            {/* ==================================================
                IMAGE DIMENSIONS
            ================================================== */}

            <section
              id="image-dimensions"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                Image Dimensions
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use consistent dimensions for images that
                appear together. This helps product grids,
                collections, and promotional sections look
                cleaner across your store.
              </p>


              {/* ==================================================
                  PRODUCT IMAGES
              ================================================== */}

              <h3
                className="
                  mt-7
                  text-base
                  font-semibold
                "
              >
                Product Images
              </h3>


              <ul
                className="
                  mt-4
                  space-y-3
                "
              >

                <li
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <strong className="text-navy">
                    Main Product Image:
                  </strong>{" "}
                  Use a consistent square format for
                  product listings where possible.
                </li>

                <li
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <strong className="text-navy">
                    Product Gallery:
                  </strong>{" "}
                  Keep gallery images at the same
                  dimensions for a consistent layout.
                </li>

                <li
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <strong className="text-navy">
                    Product Detail Images:
                  </strong>{" "}
                  Use larger source images when customers
                  need to inspect product details.
                </li>

              </ul>


              {/* ==================================================
                  STORE IMAGES
              ================================================== */}

              <h3
                className="
                  mt-7
                  text-base
                  font-semibold
                "
              >
                Storefront Images
              </h3>


              <ul
                className="
                  mt-4
                  space-y-3
                "
              >

                <li
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <strong className="text-navy">
                    Hero Banner:
                  </strong>{" "}
                  Use a wide image that works well across
                  desktop and mobile layouts.
                </li>

                <li
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <strong className="text-navy">
                    Collection Images:
                  </strong>{" "}
                  Keep images within the same collection
                  visually consistent.
                </li>

                <li
                  className="
                    text-sm
                    leading-6
                    text-navy-mute
                  "
                >
                  <strong className="text-navy">
                    Promotional Images:
                  </strong>{" "}
                  Match the dimensions to the section where
                  the promotion will appear.
                </li>

              </ul>


              {/* ==================================================
                  DIMENSION TABLE
              ================================================== */}

              <div
                className="
                  mt-7
                  overflow-x-auto
                  rounded-lg
                  border
                  border-border
                "
              >

                <table
                  className="
                    w-full
                    min-w-[620px]
                    text-left
                    text-sm
                  "
                >

                  <thead
                    className="
                      bg-black/5
                    "
                  >

                    <tr>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Image Type
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Recommended Approach
                      </th>

                      <th
                        className="
                          px-4
                          py-3
                          font-semibold
                        "
                      >
                        Main Goal
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-4
                          font-medium
                        "
                      >
                        Product
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Consistent square dimensions
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Consistent product grid
                      </td>

                    </tr>


                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-4
                          font-medium
                        "
                      >
                        Hero
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Wide responsive image
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Clear promotional message
                      </td>

                    </tr>


                    <tr
                      className="
                        border-t
                        border-border
                      "
                    >

                      <td
                        className="
                          px-4
                          py-4
                          font-medium
                        "
                      >
                        Collection
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Matching dimensions
                      </td>

                      <td
                        className="
                          px-4
                          py-4
                          text-navy-mute
                        "
                      >
                        Balanced collection layout
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </section>


                {/* ==================================================
                NEED TO RESIZE YOUR IMAGES
            ================================================== */}

            <section
              id="resize-images"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                Need to Resize Your Images?
              </h2>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                If your image is too large for the section
                where you want to use it, resize it before
                uploading it to Sellio. Keeping dimensions
                appropriate for the intended location can
                help maintain a clean storefront layout.
              </p>


              {/* ==================================================
                  OPTION 1
              ================================================== */}

              <Link
                href="#"
                className="
                  group
                  mt-6
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  transition-colors
                  hover:border-coral
                "
              >

                <div
                  className="
                    flex
                    min-w-0
                    items-start
                    gap-4
                  "
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-black/5
                    "
                  >

                    <ImageIcon
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />

                  </div>


                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                        group-hover:text-coral
                      "
                    >
                      Image Resizing Tools
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Resize and compress your images
                      before uploading them to your store.
                    </p>

                  </div>

                </div>


                <ArrowRight
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-navy-mute
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:text-coral
                  "
                />

              </Link>


              {/* ==================================================
                  OPTION 2
              ================================================== */}

              <Link
                href="#"
                className="
                  group
                  mt-3
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  transition-colors
                  hover:border-coral
                "
              >

                <div
                  className="
                    flex
                    min-w-0
                    items-start
                    gap-4
                  "
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-black/5
                    "
                  >

                    <Check
                      className="
                        h-4
                        w-4
                        text-coral
                      "
                    />

                  </div>


                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                        group-hover:text-coral
                      "
                    >
                      Compress Before Uploading
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-navy-mute
                      "
                    >
                      Reduce unnecessary file size while
                      keeping the image clear and useful.
                    </p>

                  </div>

                </div>


                <ArrowRight
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-navy-mute
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:text-coral
                  "
                />

              </Link>


              {/* ==================================================
                  QUICK TIPS
              ================================================== */}

              <div
                className="
                  mt-7
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-5
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Quick image tips
                </p>


                <ul
                  className="
                    mt-4
                    space-y-3
                  "
                >

                  {[
                    "Crop the image before resizing when unnecessary background space is present.",
                    "Keep the subject centered when the image will appear in a product or collection card.",
                    "Use the same aspect ratio for images displayed together.",
                    "Check the image on both desktop and mobile layouts.",
                    "Avoid enlarging a small image because it can reduce visual quality.",
                  ].map((item) => (

                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >

                      <Check
                        className="
                          mt-0.5
                          h-4
                          w-4
                          shrink-0
                          text-coral
                        "
                      />

                      <span>
                        {item}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>


              {/* ==================================================
                  IMAGE QUALITY NOTE
              ================================================== */}

              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-5
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <Info
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-coral
                    "
                  />


                  <div>

                    <p
                      className="
                        text-sm
                        font-semibold
                      "
                    >
                      Quality matters too
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >
                      The smallest possible file is not
                      always the best choice. Use enough
                      quality to keep product details,
                      text, and important visual elements
                      clear.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* ==================================================
                IMAGE UPLOAD CHECKLIST
            ================================================== */}

            <section
              id="upload-checklist"
              className="
                scroll-mt-28
                border-b
                border-border
                py-8
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                "
              >
                Image Upload Checklist
              </h2>


              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-navy-mute
                "
              >
                Use this quick checklist before adding an
                image to your Sellio store.
              </p>


              <div
                className="
                  mt-6
                  rounded-lg
                  border
                  border-border
                  p-5
                "
              >

                <div
                  className="
                    space-y-4
                  "
                >

                  {[
                    "The image uses an appropriate file format.",
                    "The dimensions match the intended storefront section.",
                    "The file is not unnecessarily large.",
                    "The image looks sharp at its displayed size.",
                    "The subject is positioned correctly.",
                    "The image works well on mobile screens.",
                  ].map((item) => (

                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        leading-6
                        text-navy-mute
                      "
                    >

                      <span
                        className="
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-black/5
                        "
                      >

                        <Check
                          className="
                            h-3
                            w-3
                            text-coral
                          "
                        />

                      </span>


                      <span>
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </section>


            {/* ==================================================
                FINAL IMAGE TIP
            ================================================== */}

            <section
              id="final-tip"
              className="
                scroll-mt-28
                py-8
              "
            >

              <div
                className="
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-6
                "
              >

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-coral
                  "
                >
                  Tip
                </p>


                <h2
                  className="
                    mt-2
                    text-xl
                    font-bold
                  "
                >
                  Keep Your Storefront Consistent
                </h2>


                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-sm
                    leading-7
                    text-navy-mute
                  "
                >
                  Consistent image dimensions, clear
                  photography, and sensible file sizes make
                  your Sellio storefront easier to browse
                  and give your products a more polished
                  presentation.
                </p>

              </div>

            </section>


          {/* ==================================================
                NEED HELP
            ================================================== */}

            <section
              id="need-help"
              className="
                scroll-mt-28
                border-t
                border-border
                py-8
              "
            >
              <div
                className="
                  rounded-lg
                  border
                  border-border
                  bg-black/5
                  px-5
                  py-6
                "
              >

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-coral
                  "
                >
                  Support
                </p>

                <h2
                  className="
                    mt-2
                    text-xl
                    font-bold
                  "
                >
                  Need Help With Your Images?
                </h2>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-sm
                    leading-7
                    text-navy-mute
                  "
                >
                  If an image does not look right after you
                  upload it to your Sellio store, check the
                  dimensions, file format, and file size first.
                </p>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-sm
                    leading-7
                    text-navy-mute
                  "
                >
                  If you still need help with an image or
                  storefront layout, contact the Sellio
                  support team.
                </p>

                <Link
                  href="/#contact"
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-md
                    bg-coral
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-opacity
                    hover:opacity-90
                  "
                >
                  Contact Support

                  <ArrowRight
                    className="h-4 w-4"
                  />
                </Link>

              </div>
            </section>


            {/* ==================================================
                RELATED GUIDES
            ================================================== */}

            <section
              className="
                border-t
                border-border
                py-8
              "
            >

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-coral
                "
              >
                Continue Learning
              </p>

              <h2
                className="
                  mt-2
                  text-xl
                  font-bold
                "
              >
                Related Guides
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-navy-mute
                "
              >
                Continue exploring Sellio documentation to
                learn more about setting up and managing your
                online store.
              </p>


              <div
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >

                {/* ==================================================
                    SET UP EMAIL
                ================================================== */}

                <Link
                  href="/documentation/set-up-email-inbox"
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-colors
                    hover:border-coral
                  "
                >

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    Helpful Info
                  </p>

                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      group-hover:text-coral
                    "
                  >
                    Set Up Email Inbox
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn how to set up a professional
                    business email for your store.
                  </p>

                  <span
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    Read guide

                    <ArrowRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </span>

                </Link>


                {/* ==================================================
                    GOOGLE ANALYTICS
                ================================================== */}

                <Link
                  href="/documentation/google-analytics"
                  className="
                    group
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-colors
                    hover:border-coral
                  "
                >

                  <p
                    className="
                      text-xs
                      text-navy-mute
                    "
                  >
                    Analytics
                  </p>

                  <h3
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      group-hover:text-coral
                    "
                  >
                    Google Analytics
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-navy-mute
                    "
                  >
                    Learn how analytics can help you
                    understand activity on your store.
                  </p>

                  <span
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-coral
                    "
                  >
                    Read guide

                    <ArrowRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </span>

                </Link>

              </div>

            </section>


            {/* ==================================================
                PREVIOUS / NEXT NAVIGATION
            ================================================== */}

            <div
              className="
                grid
                gap-4
                border-t
                border-border
                pt-6
                sm:grid-cols-2
              "
            >

              {/* ==================================================
                  PREVIOUS
              ================================================== */}

              <Link
                href="/documentation/set-up-email-inbox"
                className="
                  group
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  transition-colors
                  hover:border-coral
                "
              >

                <p
                  className="
                    text-xs
                    text-navy-mute
                  "
                >
                  Previous
                </p>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    group-hover:text-coral
                  "
                >

                  <ArrowLeft
                    className="h-4 w-4"
                  />

                  Set Up Email Inbox

                </div>

              </Link>


              {/* ==================================================
                  NEXT
              ================================================== */}

              <Link
                href="/documentation/reset-password"
                className="
                  group
                  rounded-lg
                  border
                  border-border
                  px-5
                  py-4
                  text-right
                  transition-colors
                  hover:border-coral
                "
              >

                <p
                  className="
                    text-xs
                    text-navy-mute
                  "
                >
                  Next
                </p>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-end
                    gap-2
                    text-sm
                    font-semibold
                    group-hover:text-coral
                  "
                >

                  Reset Password

                  <ArrowRight
                    className="h-4 w-4"
                  />

                </div>

              </Link>

            </div>


            {/* ==================================================
                LAST UPDATED
            ================================================== */}

            <div
              className="
                py-6
                text-xs
                text-navy-mute
              "
            >
              Last updated recently
            </div>

          </article>


          {/* ==================================================
              RIGHT TOC
          ================================================== */}

          <aside
            className="
              hidden
              xl:block
            "
          >

            <div
              className="
                sticky
                top-28
                border-l
                border-border
                pl-6
              "
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-navy-mute
                "
              >
                On This Page
              </p>


              <nav
                className="
                  mt-5
                  space-y-3
                "
              >

                {sections.map((section) => {

                  const isActive =
                    activeSection === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(event) => {

                        event.preventDefault();

                        document
                          .getElementById(
                            section.id
                          )
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });

                        setActiveSection(
                          section.id
                        );

                      }}
                      className={`
                        block
                        border-l-2
                        py-1
                        pl-3
                        text-sm
                        leading-5
                        transition-colors
                        duration-200

                        ${
                          isActive
                            ? `
                              border-coral
                              font-medium
                              text-coral
                            `
                            : `
                              border-transparent
                              text-navy-mute
                              hover:border-coral/40
                              hover:text-coral
                            `
                        }
                      `}
                    >
                      {section.label}
                    </a>
                  );

                })}

              </nav>

            </div>

          </aside>

        </div>

      </main>


      {/* ======================================================
          SELLIO FOOTER
      ====================================================== */}

      <Footer />
    </>
  );
}