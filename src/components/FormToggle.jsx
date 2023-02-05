import Button from "./Button";

function FormToggle({
  defaultState,
  onAddClick,
  toggleSwitchLabel
}) {
  return (
    <div className="d-flex form-toggle-container">
      <Button 
        defaultState={defaultState} 
        buttonLabel={toggleSwitchLabel} 
        onAddClick={onAddClick} 
      />
    </div>
  )
}

export default FormToggle