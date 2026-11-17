#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <queue>
#include <map>
#include <unordered_map>
#include <set>
#include <numeric>
#include <limits>
#include <tuple>
#include <array>
#include <stack>
#include <deque>
#include <cstdint>
#include <cmath>
#include <functional>
#include <iomanip>
#include <sstream>
using namespace std;
using ll = long long;

int main(){
    int n;cin>>n;vector<ll>t;
    while(n--){ll x;cin>>x;auto it=lower_bound(t.begin(),t.end(),x);
        if(it==t.end())t.push_back(x);else *it=x;}
    cout<<t.size()<<'\n';
}
