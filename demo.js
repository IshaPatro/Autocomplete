import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export default function Tags() {
  const [autoCompleteValue, setAutoCompleteValue] = useState(["foo", "bar"]);

  return (
    <div>
      <Autocomplete
        multiple
        freeSolo
        id="tags-outlined"
        options={["foo", "bar"]}
        defaultValue={["foo", "bar"]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
              onKeyDown={(e) => {
              if (e.keyCode === 13 && e.target.value) {
                setAutoCompleteValue(autoCompleteValue.concat(e.target.value));
              }
            }}
          />
        )}
      />
    </div>
  );
}
