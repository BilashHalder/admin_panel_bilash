import React from 'react'

export default function ChangeImage() {
  return (
    <div>
                 <div class="form-group">
                        <label>Change Profile Image</label>
                        <input type="file" name="img[]" class="file-upload-default" />
                        <div class="input-group col-xs-12">
                          <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Profile Image" />
                          <span class="input-group-append">
                            <button class="file-upload-browse btn btn-primary" type="button"> Upload </button>
                          </span>
                        </div>
                      </div>
    </div>
  )
}
