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

struct Counter{
    int n;vector<ll>b;Counter(int n):n(n),b(n+1){}
    void add(int i){for(;i<=n;i+=i&-i)b[i]++;}
    ll sum(int i){ll s=0;for(;i;i-=i&-i)s+=b[i];return s;}
};
int main(){
    ios::sync_with_stdio(false);cin.tie(nullptr);
    int n;cin>>n;vector<ll>a(n);for(ll&x:a)cin>>x;
    auto v=a;sort(v.begin(),v.end());v.erase(unique(v.begin(),v.end()),v.end());
    Counter ft(v.size());ll S=0,E=0,G=0;
    for(int j=0;j<n;j++){
        int r=lower_bound(v.begin(),v.end(),a[j])-v.begin()+1;
        ll less=ft.sum(r-1),le=ft.sum(r);
        S+=less;E+=le-less;G+=j-le;ft.add(r);
    }
    cout<<S<<' '<<E<<' '<<G<<'\n';
}
