import { ReactElement, createElement } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { ActionValue, EditableValue } from "mendix";

export interface BlockNoteSaveProps {
    jsonAttribute: EditableValue<string>;
    saveAction?: ActionValue;
    editor: BlockNoteEditor;
}

export function MendixBlockNoteSave({ jsonAttribute, saveAction, editor }: BlockNoteSaveProps): ReactElement {
    const handleSave = () => {
        if(jsonAttribute && jsonAttribute.status === 'available')   {
            if(saveAction && !saveAction.isExecuting)   {
                if(saveAction.canExecute)   {
                    jsonAttribute.setValue(
                        JSON.stringify(editor.document, null, 2)
                    );
                    saveAction.execute();
                }
                else {
                    console.log('Save not possible as Save action cannot be executed.');
                }
            }
        }
        else {
            console.log('Save not possible as JSON attribute is not available.');
        }
    };

    return (
        <div className="blocknote-save-btn">
            <button className="btn mx-button" onClick={handleSave}>Save</button>
        </div>
    );

}










    
