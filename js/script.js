
  function demo() {
    var theme = $('select[name=selector]').val();
    switch (theme) {
      case "success":
        $.jnoty("Your email was verified.", {
          sticky: true,
          header: 'Success',
          theme: 'jnoty-' + theme,
          icon: 'fa fa-check-circle fa-2x'
        });
        break;
      case "warning":
        $.jnoty("I am a warning message", {
          sticky: true,
          header: 'Warning',
          theme: 'jnoty-' + theme,
          icon: 'fa fa-info-circle fa-2x'
        });
        break;
      case "info":
        $.jnoty("I am a info message", {
          sticky: true,
          header: 'Information',
          theme: 'jnoty-' + theme,
          icon: 'fa fa-info-circle fa-2x'
        });
        break;
      case "danger":
        $.jnoty("I am a warning message", {
          sticky: true,
          header: 'Danger',
          theme: 'jnoty-' + theme,
          icon: 'fa fa-info-circle fa-2x'
        });
        break;
      default:
        $.jnoty("I am a info message", {
          sticky: true,
          header: 'Information',
          theme: 'jnoty-' + theme,
          icon: 'fa fa-info-circle fa-2x'
        });
    }
  }