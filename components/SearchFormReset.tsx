"use client";

import Form from "next/form";
import Link from "next/link";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) form.reset();
    }
    return (
        <Form action={ () => {}}>
            <button type="reset" onClick={reset}>
                <Link href="/" className="search-btn text-white">
                X
                </Link>
            </button>
        </Form>
    )
}

export default SearchFormReset;