# Checkbox - Custom React Checkbox Component

A custom checkbox component built with React and CSS. Features customizable styling, accessibility, and smooth animations.

## Features

- Custom checkbox styling
- Smooth animations
- Accessibility support
- Keyboard navigation
- Customizable appearance
- Indeterminate state
- Responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/check-box.git
   ```

2. Copy `checkbox.tsx` and `global.css` into your project

3. Import and use the component:
   ```tsx
   import Checkbox from './checkbox';

   function App() {
     return (
       <Checkbox.Group onChange={(values) => console.log(values)}>
         <Checkbox value="option1">Option 1</Checkbox>
         <Checkbox value="option2">Option 2</Checkbox>
         <Checkbox value="option3">Option 3</Checkbox>
       </Checkbox.Group>
     );
   }
   ```

## Usage

### Basic Usage
```tsx
import Checkbox from './checkbox';

function App() {
  const handleChange = (checked: boolean) => {
    console.log('Checked:', checked);
  };

  return (
    <Checkbox onChange={handleChange}>
      I agree to the terms
    </Checkbox>
  );
}
```

### Checkbox Group
```tsx
<Checkbox.Group onChange={(values) => console.log(values)}>
  <Checkbox value="apple">Apple</Checkbox>
  <Checkbox value="banana">Banana</Checkbox>
  <Checkbox value="cherry">Cherry</Checkbox>
</Checkbox.Group>
```

### Custom Styling
```css
/* Override default styles */
.checkbox-input {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.checkbox-input:checked {
  background-color: #007bff;
  border-color: #007bff;
}

.checkbox-input::after {
  content: '✓';
  color: white;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.2s;
}

.checkbox-input:checked::after {
  opacity: 1;
}
```

### Indeterminate State
```tsx
<Checkbox indeterminate>Partially selected</Checkbox>
```

### Disabled State
```tsx
<Checkbox disabled>Disabled option</Checkbox>
```

## Props

### Checkbox
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Checked state |
| indeterminate | boolean | false | Indeterminate state |
| disabled | boolean | false | Disabled state |
| onChange | function | - | Change handler |
| children | node | - | Label content |

### Checkbox.Group
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | array | [] | Selected values |
| onChange | function | - | Selection change handler |
| children | node | - | Checkbox children |

## Features in Detail

### Custom Styling
- Fully customizable appearance
- CSS-based animations
- Support for different sizes and colors

### Accessibility
- Proper ARIA attributes
- Keyboard navigation
- Screen reader support

### Animations
- Smooth check transitions
- Hover effects
- Focus indicators

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
