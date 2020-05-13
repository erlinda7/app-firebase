import React from "react";
import ReactDOM from "react-dom";
import styles from './style.module.scss';
import Button from '../../components/button'
import TextField from '../../components/textField';
import Select from '../../components/select';
import FormControl from '../../components/formControl'

class Page extends React.Component {
    render() {
        const {
            expense,
            onClose
        } = this.props

        const node = (
            <div className={styles.modalContainer}>
                <div className={styles.modalBox}>
                    <h1
                        onClick={onClose}
                    >Expenses</h1>
                    <Button
                        type='outline'
                        onClick={onClose}
                        label='Cancel'
                        disabled={false}
                    />
                    <FormControl type="block">
                        <TextField />
                        <TextField />
                    </FormControl>
                    <Select
                        options={[
                            {
                                label: 'option 1',
                                value: 'val1'
                            },
                            {
                                label: 'option 2',
                                value: 'val2'
                            }

                        ]}
                        value={'values'}
                        onChange={() => { }}
                        onBlur={() => { }}
                        placeholder='choose an option'
                    />
                </div>
            </div>
        );

        return ReactDOM.createPortal(node, document.getElementById('modal-root'));
    }
}

export default Page;