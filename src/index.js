
import generic from 'src/analytics/fixtures/cities.json';
console.log(generic)

function requireAll( requireContext ) {
    return requireContext.keys().map( requireContext );
  }
  let modules = requireAll( require.context("analytics/fixtures", false, /.json$/) );
  console.log(modules)