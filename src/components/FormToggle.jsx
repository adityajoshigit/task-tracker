import Button from "./Button";

function FormToggle({
  defaultState,
  onAddClick,
  toggleSwitchLabel
}) {
  return (
    <div className="form-toggle-container">
      <Button 
        defaultState={defaultState} 
        buttonLabel={toggleSwitchLabel} 
        onAddClick={onAddClick} 
      />
    </div>
  )
}

export default FormToggle